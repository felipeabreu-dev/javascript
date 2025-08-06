module.exports = {
    unidadeAstronomica: 149587870,
    converterDistancia: function(ua) {
        return ua * this.unidadeAstronomica;
    }
}