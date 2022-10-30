dineroCofla = prompt("Cuanto dinero tiene Cofla?");
dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
dineroPedro = prompt("Cuanto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    document.write("Cofla Compra el Helado de Agua")
    document.write("y te sobra " + (dineroCofla - 0.6))
} 
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    document.write("Cofla Compra el Helado de Crema")
    document.write("y te sobra " + (dineroCofla - 1))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    document.write("Cofla Compra el Helado Heladix")
    document.write("y te sobra " + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    document.write("Cofla Compra el Helado heladovich")
    document.write("y te sobra " + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    document.write("Cofla Compra el Helado helardo")
    document.write("y te sobra " + (dineroCofla - 1.8))
}
else if (dineroCofla >= 2.9){
    document.write("CoflaCompra el Helado con confites o el pote de 1/4 kG")
    document.write("y te sobra " + (dineroCofla - 2.9))
}
else {
    document.write("Cofla No te alcanza :(")
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    document.write("Roberto Compra el Helado de Agua")
    document.write("y te sobra " + (dineroRoberto - 0.6))
} 
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    document.write("Roberto Compra el Helado de Crema")
    document.write("y te sobra " + (dineroRoberto - 0.6))
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    document.write("Roberto Compra el Helado Heladix")
    document.write("y te sobra " + (dineroRoberto - 0.6))
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    document.write("Roberto Compra el Helado heladovich")
    document.write("y te sobra " + (dineroRoberto - 0.6))
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    document.write("Roberto Compra el Helado helardo")
    document.write("y te sobra " + (dineroRoberto - 0.6))
}
else if (dineroRoberto >= 2.9){
    document.write("Roberto Compra el Helado con confites o el pote de 1/4 kG")
    document.write("y te sobra " + (dineroRoberto - 0.6))
}
else {
    document.write("Roberto No te alcanza :(")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    document.write("Pedro Compra el Helado de Agua")
    document.write("y te sobra " + (dineroPedro - 0.6))
} 
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    document.write("Pedro Compra el Helado de Crema")
    document.write("y te sobra " + (dineroPedro - 0.6))
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    document.write("Pedro Compra el Helado Heladix")
    document.write("y te sobra " + (dineroPedro - 0.6))
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    document.write("Pedro Compra el Helado heladovich")
    document.write("y te sobra " + (dineroPedro - 0.6))
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    document.write("Pedro Compra el Helado helardo")
    document.write("y te sobra " + dineroPedro - 0.6)
}
else if (dineroPedro >= 2.9){
    document.write("Pedro Compra el Helado con confites o el pote de 1/4 kG")
    document.write("y te sobra " + (dineroPedro - 0.6))
}
else {
    document.write("Pedro No te alcanza :(")
}