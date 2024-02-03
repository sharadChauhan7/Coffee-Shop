import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";


const popupContext = createContext(null);
export function PopupState(props){
    const [popup, setPopup] = useState(false);
    
    let [login, setLogin] = useState(false);

    let [signup, setSignup] = useState(false);

    let [num, setNum] = useState(JSON.parse(localStorage.getItem('cart'))?.length);

  
    function handellogin() {
      setLogin(!login);
    }
    function handelsignup() {
      setSignup(!signup);
    }
  
    function handelPopcart(){
        setPopup(!popup);
    }
    return (
        <popupContext.Provider value={{popup,handelPopcart,login,handellogin,signup,handelsignup,num,setNum}}>
            {props.children}
        </popupContext.Provider>
    )

}
export function usePopup(){
    let context = useContext(popupContext);
    if (context === undefined) {
        throw new Error('usePopup must be used within a PopupProvider');
      }
      return context;
}