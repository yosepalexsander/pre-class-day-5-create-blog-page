const emailReceiver = 'rhomairama.dev@gmail.com';

let nameSender = document.getElementById('input-name');
let email = document.getElementById('input-email');
let phone = document.getElementById('input-phone');
let subject = document.getElementById('input-subject');
let message = document.getElementById('input-message');

function submitForm() {
  // Parsing data / Get data --------------------------------------
  let nameData = nameSender.value;
  let emailData = email.value;
  let phoneData = phone.value;
  let subjectData = subject.value;
  let messageData = message.value;

  // Validation ---------------------------------------------------
  if (nameData == '') {
    return alert('Name input fields must be not empty');
  } else if (emailData == '') {
    return alert('Email input fields must be not empty');
  } else if (phoneData == '') {
    return alert('Phone input fields must be not empty');
  } else if (subjectData == '') {
    return alert('Subject input fields must be not empty');
  } else if (messageData == '') {
    return alert('Message input fields must be not empty');
  }

  // Mail to ---------------------------------------------------------
  const a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.target = '_blank';
  a.click();

  // Store data to object ---------------------------------------------
  let dataObject = {
    name: nameData,
    email: emailData,
    phoneNumber: phoneData,
    subject: subjectData,
    message: messageData,
  };
  console.log(dataObject);
}
