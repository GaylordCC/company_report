import httpRequest from '../../services/http_request';

export const createVisit = (params) => {
    try {
        const response = httpRequest ({
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