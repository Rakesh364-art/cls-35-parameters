import React, { useRef } from "react";

function Parameters() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let enterLabelRef = useRef();

  let firstNameresLabelRef = useRef();
  let lastNameresLabelRef = useRef();
  let telresLabelRef = useRef();
  let hinresLabelRef = useRef();
  let engresLabelRef = useRef();
  let matresLabelRef = useRef();
  let sciresLabelRef = useRef();
  let socresLabelRef = useRef();

  let inputOnFocous = (inputRef) => {
    inputRef.current.style.backgroundColor = "pink";
  };
  let inputOnChange = (inputRef, resLabelRef) => {
    if (inputRef.current.value > 0 && inputRef.current.value < 100) {
      if (inputRef.current.value >= 35) {
        resLabelRef.current.innerHTML = "pass";
        resLabelRef.current.style.backgroundColor = "brown";
      } else {
        resLabelRef.current.innerHTML = "fail";
        resLabelRef.current.style.backgroundColor = "green";
      }
    } else {
      resLabelRef.current.innerHTML = "invalid";
      resLabelRef.current.style.backgroundColor = "yellow";
    }
  };
  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
  };
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={firstNameInputRef}></input>
          <label ref={firstNameresLabelRef}></label>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" ref={lastNameInputRef}></input>
          <label ref={lastNameresLabelRef}></label>
        </div>
        <div>
          <label>Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => {
              inputOnFocous(telInputRef);
            }}
            onChange={() => {
              inputOnChange(telInputRef, telresLabelRef);

              // if (
              //   telInputRef.current.value > 0 &&
              //   telInputRef.current.value < 100
              // ) {
              //   if (telInputRef.current.value >= 35) {
              //     telresLableRef.current.innerHTML = "pass";
              //     telresLableRef.current.style.backgroundColor = "brown";
              //   } else {
              //     telresLableRef.current.innerHTML = "fail";
              //     telresLableRef.current.style.backgroundColor = "green";
              //   }
              // } else {
              //   telresLableRef.current.innerHTML = "invalid";
              //   telresLableRef.current.style.backgroundColor = "yellow";
              // }
            }}
            onBlur={() => {
              // telInputRef.current.style.backgroundColor = "";
              inputOnBlur(telInputRef);
            }}
          ></input>
          <label ref={telresLabelRef}></label>
        </div>
        <div>
          <label>Hindi</label>
          <input
            type="number"
            ref={hinInputRef}
            onFocus={() => {
              inputOnFocous(hinInputRef);
            }}
            onChange={() => {
              inputOnChange(hinInputRef, hinresLabelRef);
            }}
            onBlur={() => {
              inputOnBlur(hinInputRef);
            }}
          ></input>
          <label ref={hinresLabelRef}></label>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              inputOnFocous(engInputRef);
            }}
            onChange={() => {
              inputOnChange(engInputRef, engresLabelRef);
            }}
            onBlur={() => {
              inputOnBlur(engInputRef);
              // engInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={engresLabelRef}></label>
        </div>
        <div>
          <label>Maths</label>
          <input
            type="number"
            ref={matInputRef}
            onFocus={() => {
              inputOnFocous(matInputRef);
            }}
            onChange={() => {
              inputOnChange(matInputRef, matresLabelRef);
            }}
            onBlur={() => {
              inputOnBlur(matInputRef);
            }}
          ></input>
          <label ref={matresLabelRef}></label>
        </div>
        <div>
          <label>Science</label>
          <input
            type="number"
            ref={sciInputRef}
            onFocus={() => {
              //
              inputOnFocous(sciInputRef);
            }}
            onChange={() => {
              inputOnChange(sciInputRef, sciresLabelRef);
            }}
            onBlur={() => {
              inputOnBlur(sciInputRef);
            }}
          ></input>
          <label ref={sciresLabelRef}></label>
        </div>
        <div>
          <label>Social</label>
          <input
            type="number"
            ref={socInputRef}
            onFocus={() => {
              // socInputRef.current.style.backgroundColor = "pink";
              inputOnFocous(socInputRef);
            }}
            onChange={() => {
              inputOnChange(socInputRef, socresLabelRef);
            }}
            onBlur={() => {
              inputOnBlur(socInputRef);
            }}
          ></input>
          <label ref={socresLabelRef}></label>
        </div>
        <div>
          <label ref={enterLabelRef}>result</label>
        </div>
        <button
          type="button"
          onClick={() => {
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let telMar = Number(telInputRef.current.value);
            let hinMar = Number(hinInputRef.current.value);
            let engMar = Number(engInputRef.current.value);
            let matMar = Number(matInputRef.current.value);
            let sciMar = Number(sciInputRef.current.value);
            let socMar = Number(socInputRef.current.value);
            let result;

            let totalMarks =
              telMar + hinMar + engMar + matMar + sciMar + socMar;
            if (
              telMar > 35 &&
              hinMar > 35 &&
              engMar > 35 &&
              matMar > 35 &&
              sciMar > 35 &&
              socMar > 35
            ) {
              result = "passed";
            } else {
              result = "failed";
            }
            enterLabelRef.current.innerHTML = `${firstName} ${lastName} ${result} in exams and got totalMarks are ${totalMarks}`;

            // alert(
            //   `${firstName} ${lastName} ${result} in exams and  got totalMarks are ${totalMarks}`
            // );
          }}
        >
          calculate
        </button>
      </form>
    </div>
  );
}

export default Parameters;
