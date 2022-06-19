const BASE_URL = "https://covid19.mathdro.id";

const ENDPOINTS = {
    GLOBAL: `${BASE_URL}/api`,
    INDONESIA: `${BASE_URL}/api/countries/indonesia`,
    SUMMARY_GLOBAL: `${BASE_URL}/api/og`,
    SUMMARY_INDONESIA: `${BASE_URL}/api/countries/indonesia/og`,
}
 
export default ENDPOINTS;