import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// Validação com Zod
const leadSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  perfil: z.enum(['Individual', 'Familiar', 'Empresarial']),
  // Campos opcionais
  tipo_contratacao: z.string().optional(),
  cnpj: z.string().optional(),
  acomodacao: z.string().optional(),
  idades_beneficiarios: z.array(z.string()).optional(),
  bairro: z.string().optional(),
  top_3_planos: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

// Inicializar Supabase com Service Role (server-side)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados
    const validatedData = leadSchema.parse(body);
    
    // Capturar IP e User-Agent
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Inserir no Supabase
    const { data, error } = await supabase
      .from('leads_landing')
      .insert([
        {
          ...validatedData,
          ip_address: ip,
          user_agent: userAgent,
          status: 'Novo',
          origem: 'Landing Page',
        },
      ])
      .select()
      .single();
    
    if (error) {
      console.error('Erro ao inserir lead:', error);
      return NextResponse.json(
        { error: 'Erro ao salvar lead', details: error.message },
        { status: 500 }
      );
    }
    
    // ✅ Enviar email via Resend (opcional)
    // await sendLeadNotification(data);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead criado com sucesso!',
        leadId: data.id 
      },
      { status: 201 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      );
    }
    
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
}
