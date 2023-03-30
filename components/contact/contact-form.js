import { useState } from 'react';
import styles from './contact-form.module.scss';

export default function ContactForm() {
  const initialContactData = { email: '', name: '', message: '' };
  const [contactData, setContactData] = useState(initialContactData);
  const { email, name, message } = contactData;

  function sendMessageHandler(e) {
    e.preventDefault();

    console.log(contactData);

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
      headers: { 'Content-Type': 'application/json' },
    });

    setContactData(initialContactData);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.topForm}>
            <div className={styles.control}>
              <label htmlFor='email'>Your Email</label>
              <input
                type='email'
                id='email'
                required
                value={email}
                name='email'
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.control}>
              <label htmlFor='name'>Your Name</label>
              <input
                type='text'
                id='name'
                required
                value={name}
                name='name'
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea
              id='message'
              rows='5'
              required
              value={message}
              name='message'
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
