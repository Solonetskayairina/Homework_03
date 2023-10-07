    const operations = ['add', 'sub', 'mult', 'div'];
    let operation;
    let number1;
    let number2;
    let result;


    do {
      operation = prompt('Select an operation: add, sub, mult, div');
    } while ( !isOperationValid() );

    do {
        number1 = prompt('Enter the first number');
    } while ( isNaN(number1) );

    do {
        number2 = prompt('Enter the second number');
    } while ( isNaN(number2) );

        const convertedData1 = Number(number1)
        const convertedData2 = Number(number2)


        const getActionFromOperation = (operation) => {
        const mathSymbols = {
            add: '+',
            sub: '-',
            mult: '*',
            div: '/'
        }
        return mathSymbols[operation]
        }

        if (operation === 'add') {
            result = convertedData1 + convertedData2;

        }
        if (operation === 'sub') {
            result = convertedData1 - convertedData2;

        }
        if (operation === 'mult') {
            result = convertedData1 * convertedData2;

        }
        if (operation === 'div') {
            if (convertedData2 !== 0) {
                result = convertedData1 / convertedData2;

            } else {
                alert('Division by zero is not possible');
            }
        }
        if (result) {
            alert(`${number1} ${getActionFromOperation(operation)} ${number2} = ${result}`);
        }

    function isOperationValid() {
        return !operation || operations.includes( operation.toLowerCase() )
    }

