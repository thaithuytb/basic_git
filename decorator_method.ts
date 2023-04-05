console.clear()
//enable experimentalDecorators and emitDecoratorMetadata in ts.config
//Decorator method log ra kết quả của hàm.
function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const functionSum = descriptor.value
    descriptor.value = (...arg: any[]) => {
        const result = functionSum(...arg);
        console.log(result)
        return result
    }
}

//Decorator method làm nhân đôi kết quả của hàm
function X2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target.sum);
    console.log(propertyKey);
    //Impact on the original function
    const functionSum = descriptor.value
    descriptor.value = (...arg: any[]) => {
        console.log(arg);
        //closure js
        return 2 * functionSum(...arg)
    }
}

function CustomDecorator(x: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target.sum);
    console.log(propertyKey);
    //Impact on the original function
    const functionSum = descriptor.value
    descriptor.value = (...arg: any[]) => {
        console.log(arg);
        //closure js
        return x * functionSum(...arg)
    }
}
}

//custom Decorator method

class MathDecorator {
    //Decorator method nào gần đặt trên cùng sẽ thực thi trước....Như dưới là decorator logger sẽ thực thi trước
    @Logger
    @X2
    sum (a: number, b: number) {
        return a + b;
    }

    //nhân 5 kết quả
    @CustomDecorator(5)
    customSum (a: number, b:number) {
        return a+b;
    }
}

// const sum = new MathDecorator().sum(4, 5);
const customSum = new MathDecorator().customSum(4, 5);
console.log(customSum)
