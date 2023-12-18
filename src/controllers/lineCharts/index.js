import httpRequest from '../../services/http_request';

export const getReportGenerate = async (id, params) => {
    try {
        const response = await httpRequest({
            method: "POST",
            url: `/reports/${id}/generate`
        })

        return {
            succes: true,
            data: response.data,
        }

    }catch (error) {
        return {
            succes: false,
            error: error,
            data: []
        }
    }
}