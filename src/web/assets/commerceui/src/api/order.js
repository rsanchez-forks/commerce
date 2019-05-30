/* global Craft */

import axios from 'axios'

export default {
    get(orderId) {
        return axios.get(Craft.getActionUrl('commerce/order/get', {orderId}), {
            headers: {
                [Craft.csrfTokenName]:  Craft.csrfTokenValue,
            }
        })
    },

    recalculate(draft) {
        return axios.post(Craft.getActionUrl('commerce/order/recalculate'), draft, {
            headers: {
                [Craft.csrfTokenName]:  Craft.csrfTokenValue,
            }
        })
    },

    save(draft) {
        return axios.post(Craft.getActionUrl('commerce/order/save'), draft, {
            headers: {
                [Craft.csrfTokenName]:  Craft.csrfTokenValue,
            }
        })
    },
}
