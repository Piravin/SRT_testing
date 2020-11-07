#define fPin 4
#define bPin 5
#define pPin 6

int f = 0;
int b = 0;
int p = 0;
float frpm;
float prpm;
float brpm;

void isr(){
  if(digitalRead(fPin)==1){
    f++;
  }
  else if(digitalRead(bPin)==1){
    b++;
  }
  else if(digitalRead(pPin)==1){
    p++;
  }
}

void setup(){
  Serial.begin(9600);
  pinMode(fPin,INPUT);
  pinMode(bPin,INPUT);
  pinMode(pPin,INPUT);
  attachInterrupt(digitalPinToInterrupt(3),isr,RISING);
}

void loop(){
  delay(500);
  frpm = f*2/(24);
  brpm = b*2/(24);
  prpm = p*2;
  Serial.println("{\"front\":\""+String(f)+"\",\"back\":\""+String(b)+"\",\"cvt\":\""+String(p)+"\"}");
  f = 0;
  b = 0;
  p = 0;
  
}
