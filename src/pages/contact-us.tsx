import { Meta } from '../layout/Meta';
import { ContactForm } from '../templates/ContactForm';
import { Footer } from '../templates/Footer';
import { AppConfig } from '../utils/AppConfig';

const ContactUs = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <ContactForm />
    <Footer /> 
  </div>
);

export default ContactUs;
