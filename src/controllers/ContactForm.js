export function userNameControl(e, setUserName, setUserNameErr) {
  setUserName(e.target.value);

  if (e.target.value.length >= 2 && e.target.value.length <= 20) {
    setUserNameErr(false);
  } else setUserNameErr(true);
}

export function surnameControl(e, setSurname, setSurnameErr) {
  setSurname(e.target.value);

  if (e.target.value.length >= 2 && e.target.value.length <= 20) {
    setSurnameErr(false);
  } else setSurnameErr(true);
}

export function emailControl(e, setEmail, setEmailErr) {
  setEmail(e.target.value);

  if (
    e.target.value.length === 0 ||
    (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value) &&
      e.target.value.length < 30)
  ) {
    setEmailErr(false);
  } else setEmailErr(true);
}

export function phoneControl(e, setPhone, setPhoneErr) {
  setPhone(e.target.value);

  if (
    /^[\+]?[(]?[0-9]{3}[)]?[\s]?[0-9]{2}[\s]?[0-9]{3}[\s]?[0-9]{3}$/.test(
      e.target.value
    )
  ) {
    setPhoneErr(false);
  } else setPhoneErr(true);
}

export function photoUrlControl(e, setPhotoUrl, setPhotoUrlErr) {
  setPhotoUrl(e.target.value);

  if (
    e.target.value.length === 0 ||
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      e.target.value
    )
  ) {
    setPhotoUrlErr(false);
  } else setPhotoUrlErr(true);
}
