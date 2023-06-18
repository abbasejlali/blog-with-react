const fistename = (name) => {
  const nameuser = name;
  const firsenameuser = nameuser.charAt(0);
  return firsenameuser;
};
const generate_rabndomnum = (length) => {
  const r = Math.floor(Math.random() * (length - 1)) + 0;
  if (r <= 2) return Math.floor(Math.random() * (length - 1)) + 0;
  if (r > 2) return r;
};
const generate_fa = (en) => {
  if (en === "programming") return (en = "برنامه نویسی");
  if (en === "digital-world") return (en = "دنیای دیجیتال");
  if (en === "technology") return (en = "تکنولوژی");
};

// share article
const sharePage = (title, url) => {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url,
    });
  } else {
    alert("Sharing not supported on this browser.");
  }
};

export { fistename, generate_rabndomnum, generate_fa, sharePage };
