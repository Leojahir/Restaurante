from django.db import models

class Usuario(models.Model):
    user_id = models.CharField(max_length=255, primary_key=True)
    nombre = models.CharField(max_length=255)
    correo = models.EmailField()
    rol = models.CharField(max_length=255)

class Producto(models.Model):
    product_id = models.CharField(max_length=255, primary_key=True)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=7, decimal_places=2)
    categoria = models.CharField(max_length=255)
    imagen = models.URLField()

class Pedido(models.Model):
    order_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    estado = models.CharField(max_length=255)
    metodo_pago = models.CharField(max_length=255)
    carrito = models.JSONField()

class Reserva(models.Model):
    reservation_id = models.CharField(max_length=255, primary_key=True)
    user_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    numero_mesa = models.IntegerField()
    estado = models.CharField(max_length=255)

class Mesa(models.Model):
    table_id = models.CharField(max_length=255, primary_key=True)
    numero_mesa = models.IntegerField()
    capacidad = models.IntegerField()
    estado = models.CharField(max_length=255)
