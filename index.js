document.getElementById('case-increase').addEventListener('click', function() {
    var caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;

    
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$'+caseTotal;
    
})

document.getElementById('case-decrease').addEventListener('click',function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount; 

    const caseTotal = caseNewCount *59;
    document.getElementById('case-total').innerText = '$' + caseTotal;
})

document.getElementById('phone-increase').addEventListener('click', function() {
    var phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;

    
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$'+phoneTotal;
    
})

document.getElementById('phone-decrease').addEventListener('click',function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount; 

    const phoneTotal = phoneNewCount *1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;
})

















/** 20.5.1 How to start a simple Javascript Project
 * before starting any project/assignment:
 *      -understand the task clearly and write down the tasks
 *      -see the existing code/site (if site is running)
 *      -breakdown problems steps(think before the task,solve 1 by 1)
 *      -do console.log often for testing
 *      -when 1 step is complete then push it to the github
 *      -pick the simple tasks first then hard
 *      -make code work first means done the task first.
 *      -clean code is not always necessary for beginners.
 * 
 * 
 * 20.5.2 Shopping cart, developing an interactive cart
 *      making a shopping cart
 */