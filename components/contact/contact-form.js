import { use, useEffect, useState } from 'react';

import styles from './contact-form.module.scss';
import Notification from '../ui/notification';

async function sendcontactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

export default function ContactForm() {
  const initialContactData = { email: '', name: '', message: '' };
  const [contactData, setContactData] = useState(initialContactData);
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  const { email, name, message } = contactData;

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendcontactData(contactData);
      setRequestStatus('success');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }

    setContactData(initialContactData);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending Message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
