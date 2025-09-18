import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Private = () => {
    const { store } = useGlobalReducer();
    const userName = store.user?.user_name || "User";
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.token) {
            navigate("/");
        }
    }, [store.token, navigate]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card p-4 text-center">
                        <h1 className="mb-4">Welcome to your personal area, {userName}!</h1>
                        <div className="ratio ratio-16x9">
                           <p>Hola {userName}, ¡estás dentro de la zona privada!
                            😃
                           </p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};