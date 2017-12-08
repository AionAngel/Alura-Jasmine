describe('estou testando maior e menor', () => {


    it("Deve entender numeros em ordem nao sequencial", ()=> {

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,23,56,2,36,87,32,55,67]);

        expect(algoritmo.pegaMaior()).toEqual(87);
        expect(algoritmo.pegaMenor()).toEqual(2);

    });

    it("Deve entender numeros em ordem crescente", ()=> {
        
                var algoritmo = new MaiorEMenor();
                algoritmo.encontra([1,2,3,4,5,6,7,8,9,10]);
        
                expect(algoritmo.pegaMaior()).toEqual(10);
                expect(algoritmo.pegaMenor()).toEqual(1);
        
            });

    it("Deve entender numeros em ordem decrescente", ()=> {
        
                var algoritmo = new MaiorEMenor();
                algoritmo.encontra([10,9,8,7,6,5,4,3,2,1]);
        
                expect(algoritmo.pegaMaior()).toEqual(10);
                expect(algoritmo.pegaMenor()).toEqual(1);
        
    });



});