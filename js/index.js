    let operations = ['add', 'sub', 'mult', 'div'];
    let actions = ['+', '-', '*', '/'];
    let operation = prompt('Select an operation: add, sub, mult, div');

    if ( !isOperationValid() ) {
        alert('There is no such operation')
        operation = prompt('Try again')
    }
        let num1 = prompt('Enter the first number');
            if ( isNaN(num1) ) {
                alert('You can only enter numbers')
                num1 = prompt('Try again')
            }

        let num2 = prompt('Enter the second number');
            if ( isNaN(num2) ) {
                alert('You can only enter numbers')
                num2 = prompt('Try again')
            }

        num1 = Number(num1)
        num2 = Number(num2)

        let result;
        let action;

        if (operation === 'add') {
            result = num1 + num2;
            action = actions[0]
        }
        if (operation === 'sub') {
            result = num1 - num2;
            action = actions[1]
        }
        if (operation === 'mult') {
            result = num1 * num2;
            action = actions[2]
        }
        if (operation === 'div') {
            if (num2 !== 0) {
                result = num1 / num2;
                action = actions[3]
            } else {
                alert('Division by zero is not possible');
            }
        }
        if (result) {
            alert(num1 + ' ' + action + ' ' + num2 + ' = ' + result);
        } else {
            alert('You have provided incorrect data, please reload the page')
        }

    function isOperationValid() {
        return !operation || operations.includes( operation.toLowerCase() )
    }