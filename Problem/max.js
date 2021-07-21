var neymar = 12000010000;
var messi = 2500000000;
var ozil = 154250000;


console.log(Math.max(neymar,messi,ozil));



if (neymar>messi){
    if (neymar>ozil){
        console.log(`neymar is a star player`);
    }
    else{
        console.log(`ozil is a star player`);
    }

}
else{
    if(messi>ozil){
        console.log(`messi is a star player`);
    }
    else{

        console.log(`ozil is a star player`);
    }
}






var pele = 150250000000;
var maradona = 2565140000;
var ronaldinho = 2559000063144;

console.log(Math.max(pele,maradona,ronaldinho))


if(pele>maradona){
    if(pele>ronaldinho){
        console.log(`pele is a star player`);
    }
    else{
        console.log(`ronaldinho is a star player`);
    }
}
else{
    if(maradona>ronaldinho){
        console.log(`maradona is a star player`);
    }
    else{
        console.log(`ronaldinho is a star player`)
    }
}


//another one

var sakib = 1500;
var virat = 251;
var dhoni = 250;

console.log(Math.max(sakib,virat,dhoni))

if(sakib>virat){
    if(sakib>dhoni){
        console.log(`sakib is a star player`)
    }
    else{
        console.log(`dhoni is a star player`)
    }
}
else{
    if(virat>dhoni){
        console.log(`virat is a star player`)
    }
    else{
        console.log(`dhoni is a star player`)
    }
}