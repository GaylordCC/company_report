import httpRequest from '../../services/http_request';

export const createVisit = async(params) => {
    try {
        const response = await httpRequest ({
            method: "POST",
            url: '/visits',
            data: {
                company_id: params.companyId,
                visit_date: params.fecha_visita,
                profesion: params.profesion,
                coordinator: params.coordinador,
                number_day: params.numero_dias,
                equimen_description: params.descripcion,
                contact_email: params.email,
                phase: params.fase,
                initial_day: params.fecha_ini,
                final_day: params.fecha_fin
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

export const visitList = async () => {
    try {
        const response = await httpRequest ({
            method: "GET",
            url: '/visits',
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

export const deleteVisit = async(id) => {
    try {
        const response = await httpRequest ({
            method: "DELETE",
            url: `/visits/${id}`,
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

export const getVisit = async (id) => {
    try {
        const response = await httpRequest({
            method: "GET",
            url: `/visits/${id}`,
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

export const updateVisit = (id, params) => {
    try {
        const response = httpRequest ({
            method: "PUT",
            url: `/visits/${id}`,
            data: {
                company_id: params.companyId,
                visit_date: params.fecha_visita,
                profesion: params.profesion,
                coordinator: params.coordinador,
                number_day: params.numero_dias,
                equimen_description: params.descripcion,
                contact_email: params.email,
                phase: params.fase,
                initial_day: params.fecha_ini,
                final_day: params.fecha_fin
            }
        })

        return {
            succes: true,
            data: response,
        }

    } catch (error) {
        
        return {
            succes: false,
            error:error
        }
    }
}