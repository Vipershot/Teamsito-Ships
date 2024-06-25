import React, { useEffect } from 'react'
import { TemplateLogin } from '../../components/Templates/TemplateLogin'
import { loadBeaches } from '../../service/beachesServices'
export const LoginView = () => {
    useEffect(() => {
        loadBeaches().then(res => console.log(res)).catch(err => console.log(err))
    }, []);
    return (
        <TemplateLogin />
    )
}
