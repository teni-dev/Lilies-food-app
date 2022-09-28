/** @format */

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(true);

  const getLocalStorage = (name) => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem(name);

      if (storage) return JSON.parse(localStorage.getItem(name));

      if (name === "Cartitems") return [];
      if (name === "Orderitems") return [];

      return 0;
    }
  };

  const [email, setEmail] = useState(getLocalStorage("email"));
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showProductDetailData, setShowProductDetailData] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileMenuLanding, setShowMobileMenuLanding] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [Cartitems, setCartItems] = useState(getLocalStorage("Cartitems"));
  const [Orderitems, setOrderItems] = useState(getLocalStorage("Orderitems"));
  const [totalPrice, setTotalPrice] = useState(getLocalStorage("totalPrice"));
  const [totalQuantities, setTotalQuantities] = useState(
    getLocalStorage("totalQuantities")
  );

  let findProduct;
  let findProductOrder;
  let index;

  const [qty, setQty] = useState(1);

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("Cartitems", JSON.stringify(Cartitems));
    localStorage.setItem("Orderitems", JSON.stringify(Orderitems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
  }, [
    email,
    Orderitems,
    Cartitems,
    totalPrice,
    totalQuantities,
    showProductDetailData,
  ]);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    showPassword ? setShow(true) : setShow(false);
  };

  const onChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowModal = () => {
    setShowOrder(false);
    setShowProductDetail(false);
    setShowCart(false);
    setShowAbout(false);
    setShowMobileMenu(false);
    setShowMobileMenuLanding(false);
    setQty(1);
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    try {
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      sessionStorage.setItem(
        "key",
        Math.floor(1000000000000000 + Math.random() * 9000000000000000)
      );
      setInterval(() => {
        // navigate("/dashboard");
        window.location = "/dashboard";
      }, 1000);
      toast.success(`Signup Successful`);
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong`);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (
        sessionStorage.getItem("email").toLowerCase() === email.toLowerCase() &&
        sessionStorage.getItem("password") === password
      ) {
        sessionStorage.setItem(
          "key",
          Math.floor(1000000000000000 + Math.random() * 9000000000000000)
        );
        setInterval(() => {
          window.location = "/dashboard";
          // navigate("/dashboard");
        }, 1000);
        // navigate("/dashboard");
        toast.success(`Login Successful`);
      } else {
        toast.error(`Incorrect Login`);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Incorrect Login`);
    }
  };

  const logOut = () => {
    try {
      sessionStorage.removeItem("key");

      setInterval(() => {
        window.location = "/";
      }, 1000);

      toast.success("Logout Successful");

      // navigate("/");
      setShowOrder(false);
      setShowProductDetail(false);
      setShowCart(false);
      setShowAbout(false);
      setShowMobileMenu(false);
      setShowMobileMenuLanding(false);
      setQty(1);
    } catch (error) {
      console.log(error);
    }
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = Cartitems.find(
      (cartProduct) => cartProduct._id === product._id
    );

    if (checkProductInCart) {
      setTotalPrice(totalPrice + product.price * quantity);
      setTotalQuantities(totalQuantities + quantity);
      const updatedCartitems = Cartitems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };

        return cartProduct;
      });

      setCartItems(updatedCartitems);
      toast.success(`${qty} ${product.name} added to the cart`);
    } else {
      setTotalPrice(totalPrice + product.price * quantity);
      setTotalQuantities(totalQuantities + quantity);
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);

      toast.success(`${qty} ${product.name} added to the cart.`);
    }
  };

  const onRemove = (product) => {
    findProduct = Cartitems.find((item) => item._id === product._id);
    const newCartItems = Cartitems.filter((item) => item._id !== product._id);
    setTotalPrice(totalPrice - findProduct.price * findProduct.quantity);
    setTotalQuantities(totalQuantities - findProduct.quantity);
    setCartItems(newCartItems);
  };

  const onRemoveOrderitems = (product) => {
    findProductOrder = Orderitems.find(
      (item) => item.obj_id === product.obj_id
    );
    const newOrderitems = Orderitems.filter(
      (item) => item.obj_id !== product.obj_id
    );
    setOrderitems(newOrderitems);
  };

  const toggleCartItemQuantity = (id, value) => {
    findProduct = Cartitems.find((item) => item._id === id);
    index = Cartitems.findIndex((product) => product._id === id);
    if (value === "inc") {
      findProduct.quantity += 1;
      cartitems[index] = findProduct;
      setTotalPrice(totalPrice + findProduct.price);
      setTotalQuantities(totalQuantities + 1);
    }
    if (value === "dec") {
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        Cartitems[index] = findProduct;
        setTotalPrice(totalPrice - findProduct.price);
        setTotalQuantities(totalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((oldQty) => {
      const tempQty = oldQty + 1;
      return tempQty;
    });
  };

  const decQty = () => {
    setQty((oldQty) => {
      let tempQty = oldQty - 1;
      if (tempQty < 1) {
        tempQty = 1;
      }
      return tempQty;
    });
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: sessionStorage.getItem("email"),
    firstname: sessionStorage.getItem("firstName"),
    amount: totalPrice * 100,
    metadata: {
      custom_fields: [
        {
          display_name: "Orders(s)",
          variable_name: "Order(s)",
          value: Cartitems,
        },
      ],
    },



   
};
};

export const useStateContext = () => useContext(Context);