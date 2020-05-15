import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors| null
    {
        if((control.value as string).indexOf(' ')>=0)
        return {cannotContainSpace: true};
        return null;
    }

    static minLength(control:AbstractControl):ValidationErrors| null
    {
        if((control.value as string).length<=3)
        return {minLength: true};
        return null;
    }

    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors| null>
    {
        return new Promise((resolve,reject)=>
        {
            setTimeout(() => {
                if(control.value==="Nafi")
                    resolve({shouldBeUnique: true}) ;
                    else
                    resolve(null);
            }, 2000);

        }
        );
       

        return null;
        
    }

    // static shouldBeUnique(control: AbstractControl):ValidationErrors|null
    // {
    //     setTimeout(()=>{

    //         if(control.value==="Nafi")
    //                     return {shouldBeUnique=true};
    //         return null;
    //     },2000);

    //     return null;
    // }
}