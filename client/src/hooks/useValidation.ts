import { FormInputs } from '@/types/signUpFormType';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useValidation() {
    const [pathname, setPathname] = useState('');
    const location = useLocation();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
    } = useForm<FormInputs>();
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    return { register, errors, handleSubmit, watch, reset, pathname };
}
