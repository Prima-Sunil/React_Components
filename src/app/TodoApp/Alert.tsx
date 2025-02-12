import React, { useEffect } from "react";
import {CheckIcon }from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, setVisible } from "../../redux/features/alertSlice";

const Alert = () => {
  const message = useSelector((state: { alert: { message: string | null } }) => state.alert.message);
  const isVisible = useSelector((state: { alert: { isVisible: boolean } }) => state.alert.isVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(setMessage(null));
      dispatch(setVisible(false));
    }, 1000);

    return () => clearTimeout(timeOutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <>
      {isVisible && message && (
        <div className="flex items-center gap-2 my-2 px-4 py-2 bg-green-100 text-green-700 rounded-md shadow">
          <CheckIcon checked={true} /> {message}
        </div>
      )}
    </>
  );
};

export default Alert;
