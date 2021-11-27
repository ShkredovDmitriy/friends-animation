const urlsDev = {
  apiRegistration: "http://localhost:8081/api/registration",
  apiCity: "http://localhost:8081/api/city",
  apiRecovery: "http://localhost:8081/api/recovery",
  apiLogin: "http://localhost:8081/api/login",
  apiConfirm: "http://localhost:8081/api/confirm",
  apiHand: "http://localhost:8081/api/hand",
  apiFeedback: "http://localhost:8081/api/feedback"
};

const urlsProd = {
  apiRegistration: "/api/registration",
  apiCity: "/api/city",
  apiRecovery: "/api/recovery",
  apiLogin: "/api/login",
  apiConfirm: "/api/confirm",
  apiHand: "/api/hand",
  apiFeedback: "/api/feedback"
};

const modals = {
  login: "#modalLogin",
  reg: "#modalReg",
  rec: "#modalRecovery",
  change: "#modalChange",
  feedback: "#modalFeedback",
  edit: "#modalEdit",
  winData: "#modalWinData",
  upload: "#modalFileUpload",
  uploadSucces: "#modalUploadSuccess",
  uploadFalse: "#modalUploadFalse",
  instruction: "#modalInstruction",
  hand: "#modalHand",
  info: "#modalInfo",
  winners: "#modalWinners",
  confirm: "#modalConfirm"
};

const forms = {
  login: {
    id: "#formLogin",
    email: "#formLoginEmail",
    passw: "#formLoginPassw"
  },
  reg: {
    id: "#formReg",
    name: "#formRegName",
    nameLast: "#formRegLastName",
    nameMiddle: "#formRegMiddleName",
    age: "#formRegAge",
    email: "#formRegEmail",
    phone: "#formRegPhone",
    passw: "#formRegPassw",
    passw_conf: "#formRegPasswConf",
    region: "#formRegRegion",
    city: "#formRegCity",
    rules: "#formRegRules",
    politic: "#formRegData",
    submit: "#formRegSubmit"
  },
  rec: {
    id: "#formRecovery",
    email: "#formRecoveryEmail"
  },
  filter: {
    id: "#filterWinners",
    week: "#filterWinnersWeek",
    phone: "#filterWinnersPhone",
    table: "#tableWinners"
  },
  feedback: {
    id: "#formFeedback",
    name: "#formFeedbackName",
    email: "#formFeedbackEmail",
    subject: "#formFeedbackSubject",
    message: "#formFeedbackMessage",
    data: "#formFeedbackData",
    captcha: "#formFeedbackCaptcha"
  },
  change: {
    id: "#formChange",
    passw1: "#formChangePassw1",
    passw2: "#formChangePassw2",
    passw3: "#formChangePassw3"
  },
  confirm: {
    id: "#formConfirm",
    email: "#formConfirmEmail",
    button: "#formConfirmButton"
  },
  avatar: {
    id: "#personalAvatarUploadForm",
    file: "#personalAvatarUploadImage"
  },
  edit: {
    id: "#formEdit",
    name: "#formEditName",
    nameLast: "#formEditLastName",
    phone: "#formEditPhone"
  },
  winData: {
    id: "#formWinData",
    name: "#formWinDataName",
    nameLast: "#formWinDataLAstName",
    nameMiddle: "#formWinDataMiddleName",
    inn: "#formWinDataINN",
    passpData: "#formWinDataPassportData",
    passpOrg: "#formWinDataPassportOrg",
    passpCode: "#formWinDataPassportCode",
    passpDate: "#formWinDataPassportDate",
    passpAddress: "#formWinDataPassportAddress"
  },
  link: {
    id: ".form-link",
    link: "#formLinkLink"
  },
  upload: {
    id: "#formUpload",
    file1: "#formUploadFile1",
    file2: "#formUploadFile2",
    file3: "#formUploadFile3",
    file4: "#formUploadFile4",
    file5: "#formUploadFile5",
    error: "#formUpload .form-error"
  },
  instruction: {
    button: "#formInstructionButton"
  },
  hand: {
    id: "#formHand",
    fn: "#formHandFN",
    fd: "#formHandFD",
    fp: "#formHandFP",
    date: "#formHandDate",
    time: "#formHandTime",
    summ: "#formHandSumm"
  }
};

const ms = {
  name: {
    empty: "Вы не заполнили поле Имя.",
    format: "Кириллица от 2 до 20 символов."
  },
  nameLast: {
    empty: "Вы не заполнили поле Фамилия.",
    format: "Кирилица от 2 до 20 символов."
  },
  nameMiddle: {
    empty: "Вы не заполнили поле Отчество.",
    format: "Кирилица от 2 до 20 символов."
  },
  age: {
    empty: "Вы не заполнили поле Возраст.",
    format: "Цифра от 18 и старше."
  },
  email: {
    empty: "Вы не заполнили поле E-mail.",
    format: "Используйте формат xxxxxx@xxxx.xx.",
    exist: "E-mail уже зарегистрирован.",
    confirmed: "Данный email уже подтвержден.",
    notExist: "Email не зарегистрирован."
  },
  phone: {
    empty: "Вы не заполнили поле Телефон.",
    format: "Используйте формат +7(9ХХ)XXXXXXX",
    exist: "Телефон уже зарегистрирован."
  },
  password: {
    empty: "Вы не заполнили поле «Пароль»",
    format: "Цифры и латиница, от 6 до 16 символов."
  },
  passwNew: {
    empty: "Вы не заполнили поле «Новый пароль»",
    format: "Цифры и латиница, от 6 до 16 символов."
  },
  subject: {
    empty: "Укажите причину обращения"
  },
  region: {
    empty: "Вы не указали область"
  },
  city: {
    empty: "Вы не указали город"
  },
  date: {
    empty: "Вы не заполнили поле «Дата»",
    format: "Используйте формат 25.06.2021"
  },
  time: {
    empty: "Вы не заполнили поле «Время»",
    format: "Используйте формат 15:25"
  },
  message: {
    empty: "Вы не заполнили поле Сообщение"
  },
  select: {
    empty: "Вы не выбрали вариант из списка."
  },
  rules: {
    empty: "Вы не согласились с правилами"
  },
  politic: {
    empty: "Вы не согласились с политикой"
  },
  info: {
    empty: "Вы не согласились на получение информации"
  },
  field: {
    empty: "Вы не заполниои поле."
  },
  captcha: {
    empty: "Подтвердите что вы не робот."
  },
  user: {
    notFound: "Неверный логин или пароль",
    block: "Пользователь заблокирован"
  },
  reg: {
    end: "Период регистрации завершен.",
    phoneExist: "Телефон уже зарегистрирован.",
    emailExist: "Email уже зарегистрирован."
  },
  recovery: {
    limit: "Вы превысили лимит отправки. Повторите позднее."
  },
  check: {
    exist: "Данный чек уже зарегистрирован"
  },
  nerwork: {
    error: "Ошибка. Проверьте интернет соединение."
  }
};

const info = {
  regSuccess: {
    title: "Подтвердите электронную почту",
    message:
      "На Вашу электронную почту было отправлено письмо с паролем для доступа на портал."
  },
  recSuccess: {
    title: "Восстановление пароля",
    message: "Новый пароль был отправлен на Вашу электронную почту."
  },
  confirmSuccess: {
    title: "Подтверждение электронной почты",
    message: "Письмо было отправлено на ваш email повторно."
  },
  feedbackSend: {
    title: "Обратная связь",
    message:
      "Сообщение отправлено. Мы свяжемся с вами в течение двух рабочих дней."
  },
  handSuccess: {
    title: "Данные приняты",
    message: "Мы свяжемся с вами в течении двух рабочих дней."
  },
  checkExist: {
    title: "Ошибка",
    message: "Данный чек уже загружен"
  },
  someError: {
    title: "Ошибка сети",
    message: "Проверьте интернет соединение."
  }
  // file_duplicate: {
  //   title: "Ошибка",
  //   message: "Данный файл уже загружали ранее."
  // },
  // file_time_limit_min: {
  //   title: "Ошибка",
  //   message: "Вы превысили лимит, можно загрузить 1 чек в 3 минуты"
  // },
  // file_time_limit_day: {
  //   title: "Ошибка",
  //   message: "Вы превысили лимит, можно загрузить 10 чеков в сутки"
  // },
  // check_success: {
  //   title: "Данные приняты",
  //   message: "Мы свяжемся с вами в течении двух рабочих дней."
  // },
  // check_exist: {
  //   title: "Ошибка",
  //   message: "Данный чек уже загружен"
  // },
  // rec_success: {
  //   title: "СБРОС ПАРОЛЯ",
  //   message: "Новый пароль был отправлен на Вашу электронную почту."
  // },
  // passw_changed: {
  //   title: "Смена пароля",
  //   message: "Ваш Пароль был упешно именен."
  // },
  // feedback_send: {
  //   title: "Обратная связь",
  //   message:
  //     "Сообщение отправлено. Мы свяжемся с вами в течение двух рабочих дней."
  // },
  // end_registered: {
  //   title: "чат-бот",
  //   message:
  //     "Завершите регистрацию через чат-бот, затем войдите в личный кабинет используя логин и пароль."
  // },
};

export { urlsDev, urlsProd, modals, forms, ms, info };
