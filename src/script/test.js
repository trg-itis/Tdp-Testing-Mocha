let assert = chai.assert;

function doTest(tests, func) {
    tests.forEach(category_test => {
        let nome_categoria_test = Object.keys(category_test)[0]
        let multiple_tests = Object.values(category_test)[0]
        
        describe(nome_categoria_test, function() {

            multiple_tests.forEach(test => {
                let test_input = Object.keys(test)[0]
                let test_result = Object.values(test)[0]
                
                it(`"${test_input}" deve risultare "${test_result}"`, function() {
                    assert.equal(func(test_input), test_result);
                });
                
                });
            });

        });

    mocha.run()

}



