type HTML = string;

export default interface EmailDto {
  toEmail: string;
  subject: string;
  content: HTML;
  id: string;
  returnTo?: string;
}
