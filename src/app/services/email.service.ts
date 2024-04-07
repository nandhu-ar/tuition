import emailjs from "emailjs-com";

export class EmailService {
  /**
   *
   */
  private emailId = "nandhuaregi1996@gmail.com";
  private emailServiceid = "service_lnz5qly";
  private emailTemplateId = "template_zlun48e";
  private userId = "l_cL40RaeSkGvjPiY";
  constructor() {
    emailjs.init(this.emailId);
  }

  async sendEmail(message: any) {
    await emailjs.send(
      this.emailServiceid,
      this.emailTemplateId,
      message,
      this.userId
    );
  }
}
