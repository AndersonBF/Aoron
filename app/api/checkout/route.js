export const dynamic = 'force-dynamic';

import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const { planName, price, billing } = await req.json();

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title: `Aoron · Plano ${planName} ${billing === 'annual' ? '(Anual)' : '(Mensal)'}`,
            quantity: 1,
            unit_price: price,
            currency_id: 'BRL',
          },
        ],
        payment_methods: {
          installments: billing === 'annual' ? 12 : 1,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/sucesso`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/erro`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pendente`,
        },
        auto_approve: true,
        statement_descriptor: 'AORON MARKETING',
      },
    });

    return Response.json({ init_point: result.init_point });
  } catch (error) {
    console.error('Erro ao criar preferência MP:', error);
    return Response.json({ error: 'Erro ao processar pagamento' }, { status: 500 });
  }
}