import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, comment } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Заявка LineUp Development від ${name}`,
      html: `
			<html>
				<body>
					<div style="font-family: Arial, sans-serif;">
						<h1 style="color: #3b4a8b;">Нова заявка з сайту LineUp Development</h1>
						<p><strong>Ім'я:</strong> ${name}</p>
						<p><strong>Email:</strong> ${email}</p>
						<p><strong>Телефон:</strong> ${phone}</p>
						<p><strong>Коментар:</strong> ${comment}</p>
					</div>
				</body>
			</html>
		`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Лист надіслано!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Помилка при відправці листа:", error);
    return new Response(
      JSON.stringify({ message: "Не вдалося надіслати лист" }),
      { status: 500 }
    );
  }
}
