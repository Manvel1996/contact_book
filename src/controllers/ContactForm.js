export function userNameControl(e, setUserName, setUserNameErr) {
  setUserName(e.target.value.trim());

  if (e.target.value.trim().length >= 2 && e.target.value.trim().length <= 20) {
    setUserNameErr(false);
  } else setUserNameErr(true);
}

export function surnameControl(e, setSurname, setSurnameErr) {
  setSurname(e.target.value.trim());

  if (e.target.value.trim().length >= 2 && e.target.value.trim().length <= 20) {
    setSurnameErr(false);
  } else setSurnameErr(true);
}

export function emailControl(e, setEmail, setEmailErr) {
  setEmail(e.target.value.trim());

  if (
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value.trim()) &&
    e.target.value.trim().length < 30
  ) {
    setEmailErr(false);
  } else setEmailErr(true);
}

export function phoneControl(e, setPhone, setPhoneErr) {
  setPhone(e.target.value.trimLeft());

  if (
    /^[\+]?[(]?[0-9]{3}[)]?[\s]?[0-9]{2}[\s]?[0-9]{3}[\s]?[0-9]{3}$/.test(
      e.target.value.trimLeft()
    )
  ) {
    setPhoneErr(false);
  } else setPhoneErr(true);
}

export function photoUrlControl(e, setPhotoUrl, setPhotoUrlErr) {
  setPhotoUrl(e.target.value.trim());

  if (
    e.target.value.trim().length === 0 ||
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      e.target.value.trim()
    )
  ) {
    setPhotoUrlErr(false);
  } else setPhotoUrlErr(true);
}
