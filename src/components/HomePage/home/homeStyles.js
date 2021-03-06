const homeStyleSheet = {
  home: {
    height: "568px",
    backgroundColor: '#663CBF',
    display: "flex",
  },
  intro: {
    color: "white",
    paddingTop: "100px",
    flex: "1",
    "& div": {
      margin: "auto",
      width: "60%",
    },
    "& h1": {
      fontSize: "73px",
      marginBottom: "0px",

      "@media (max-width:1300px)": {
        fontSize: "67px",

        "@media (max-width:600px)": {
          fontSize: "50px",
        },
      },
    },
    "& p": {
      fontSize: "34px",
      paddingRight: "40px",
      marginTop: "0px",

      "@media (max-width:1300px)": {
        fontSize: "33px",
        width: "100%",
        margin: "0 auto",
      },
      "@media (max-width:600px)": {
        fontSize: "30px",
        width: "100%",
        margin: "0 auto",
      },
    },

  },
  homeImage: {
    flex: "1",
    "& div": {
      backgroundColor: "rgba(97,97,203,0.63)",
      height: "400px",
      width: "400px",
      borderRadius: "50%",
      marginLeft: "80px",
      marginTop: "90px",
      "& img": {
        height: "320px",
        width: "420px",
        marginTop: "40px",
      },
    },
  },
  "@media (max-width: 1125px)": {
    homeImage: {
      display: "none",
    },
  },
  vector1: {
    marginTop: "-11.5%",
    "& img": {
      width: "100%",
      position: "absolute",
      zIndex: "1",
    },
  },
  buttonStyle: {
    backgroundColor: "#4928A5",
    border: "none",
    borderRadius: "50px",
    outline: "none",
    height: "60px",
    width: "230px",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "-20px",

    "&:hover": {
      backgroundColor: "#333399",
    },

    "@media (max-width:1300px)": {
      height: "50px",
      width: "220px",
      fontSize: "20px",
      borderRadius: "40px",
      marginTop: "20px",
    },
  },
};

export default homeStyleSheet;
