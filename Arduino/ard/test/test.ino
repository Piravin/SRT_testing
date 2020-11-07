#define fPin 4
#define bPin 5

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(fPin,INPUT);
  pinMode(bPin,INPUT);
  attachInterrupt(digitalPinToInterrupt(3),isr,RISING);
}

void isr(){
  Serial.print(digitalRead(fPin));
  Serial.println(digitalRead(bPin));
  delay(1000);
}
void loop() {
  // put your main code here, to run repeatedly:
  interrupts();
  delay(1000);
}
