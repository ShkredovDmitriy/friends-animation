const regx = {
  name: (value: string) => /^[а-яА-Я ]{2,20}$/i.test(value),
  nameLast: (value: string) => /^[а-яА-Я ]{2,20}$/i.test(value),
  nameMiddle: (value: string) => /^[а-яА-Я ]{2,20}$/i.test(value),
  age: (value: any) => {
    if (value < 18) return false;
    else if (value > 120) return false;
    else return /^[0-9]{2,3}$/i.test(value);
  },
  password: (value: string) => /^[A-Za-z0-9]{6,16}$/i.test(value),
  passwordHard: (value: string) => {
    if (/^[A-Za-z0-9]$/i.test(value) == false) return false;
    if (/[0-9]/.test(value) == false) return false;
    if (/[a-z]/.test(value) == false) return false;
    if (/[A-Z]/.test(value) == false) return false;
    return true;
  },
  email: (value: string) =>
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/i.test(value),
  phone: (value: string) =>
    /^([\+])+([7])+([\(])+([9])+([0-9]{2})+([\)])+([0-9]{7})$/i.test(value),
  message: (value: string) => /^[А-Яа-яA-Za-z0-9 ]{5,1000}$/i.test(value),
  price: (value: string) => /^[0-9]+(\,[0-9][0-9])$/i.test(value),
  linkSocial: (value: string) =>
    /^(http|https):\/\/(www.vk.com|www.instagram.com|vk.com|instagram.com)[^ "]+$/.test(
      value
    ),
  date: (value: string) =>
    /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19[3456789][0-9]|20[012][0-9])$/i.test(
      value
    ),
  time: (value: string) =>
    /^(0[1-9]|[1][0-9]|2[01234])[:]([012345][0-9])$/i.test(value)
};

export default regx;
