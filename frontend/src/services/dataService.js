import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class DataService {

    async getProducts() {
        let response = await axios.get(`${API_URL}/api/catalog`);
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post(`${API_URL}/api/catalog`, product);
        return response.data;
    }

    async getCoupons() {
        let response = await axios.get(`${API_URL}/api/coupons`);
        return response.data;
    }

    async saveCoupon(coupon) {
        let response = await axios.post(`${API_URL}/api/coupons`, coupon);
        return response.data;
    }
}

export default new DataService();
