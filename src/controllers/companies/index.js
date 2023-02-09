import httpRequest from '../../services/http_request';

export const createCompany = (params) => {
    try {
        const response = httpRequest ({
            method: "POST",
            url: '/companies',
            data: {
                name: params.name,
                city: params.city,
                identification: params.identification,
                adress: params.address,
                email: params.email,
                phone: params.phone
            }
        })
        
        return {
            succes: true,
            data: response,
        }
    }catch (error) {
        return {
            succes: false,
            error:error
        }
    }
}

export const companyList = async() => {
    try {
        const response = await httpRequest ({
            method: "GET",
            url: '/companies',
        })

        return {
            succes: true,
            data: response.data,
        }
    }catch (error) {
        return {
            succes: false,
            error:error,
            data: []
        }
    }
}

export const deleteCompany = async(id) => {
    try {
        const response = await httpRequest ({
            method: "DELETE",
            url: `/companies/${id}`,
        })

        return {
            succes: true,
            data: response.data,
        }
    }catch (error) {
        return {
            succes: false,
            error:error,
            data: []
        }
    }
}

export const getCompany = async(id) => {
    try {
        const response = await httpRequest({
            method: "GET",
            url: `/companies/${id}`,
        })

        return {
            succes: true,
            data: response.data,
        }

    } catch (error) {

        return {
            succes: false,
            error: error,
            data: []
        }

    }
}

export const updateCompany = (id, params) => {
    try {
        const response = httpRequest ({
            method: "PUT",
            url: `/companies/${id}`,
            data: {
                name: params.name,
                city: params.city,
                identification: params.identification,
                adress: params.address,
                email: params.email,
                phone: params.phone
            }
        })
        
        return {
            succes: true,
            data: response,
        }
    }catch (error) {
        return {
            succes: false,
            error:error
        }
    }
}