import httpRequest from '../../services/http_request';


export const createCompany = (params) => {
    try {
        const response = httpRequest({
            method: 'POST',
            url: '/companies',
            data: {
                name: params.name,
                city: params.city,
                identification: params.identification,
                adress: params.address,
                email: params.email,
                phone: params.phone2
            }
        })

        return {
            succes: true,
            data: response,
        }
    }catch (error) {
        return {
            succes: false,
            errors: error
        }
    }
}