from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .firebase_utils import *
from .serializers import (MesaSerializer, ProductoSerializer, PedidoSerializer, UsuarioSerializer, ReservaSerializer)

class MesaList(APIView):
    def get(self, request, format=None):
        tables = get_all_tables()
        return Response(tables)

    def post(self, request, format=None):
        serializer = MesaSerializer(data=request.data)
        if serializer.is_valid():
            table_data = create_table(serializer.validated_data)
            return Response(table_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MesaDetail(APIView):
    def get(self, request, table_id, format=None):
        table = get_table(table_id)
        if table:
            return Response(table)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, table_id, format=None):
        serializer = MesaSerializer(data=request.data)
        if serializer.is_valid():
            table_data = update_table(table_id, serializer.validated_data)
            if table_data:
                return Response(table_data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, table_id, format=None):
        deleted = delete_table(table_id)
        if deleted:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)
    
class ProductoList(APIView):
    def get(self, request, format=None):
        products = get_all_products()
        return Response(products)

    def post(self, request, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            product_data = create_product(serializer.validated_data)
            return Response(product_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductoDetail(APIView):
    def get(self, request, product_id, format=None):
        product = get_product(product_id)
        if product:
            return Response(product)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, product_id, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            product_data = update_product(product_id, serializer.validated_data)
            if product_data:
                return Response(product_data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, product_id, format=None):
        deleted = delete_product(product_id)
        if deleted:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)


class PedidoList(APIView):
    def get(self, request, format=None):
        orders = get_all_orders()
        return Response(orders)

    def post(self, request, format=None):
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            order_data = create_order(serializer.validated_data)
            return Response(order_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PedidoDetail(APIView):
    def get(self, request, order_id, format=None):
        order = get_order(order_id)
        if order:
            return Response(order)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, order_id, format=None):
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            order_data = update_order(order_id, serializer.validated_data)
            if order_data:
                return Response(order_data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, order_id, format=None):
        deleted = delete_order(order_id)
        if deleted:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)


class ReservaList(APIView):
    def get(self, request, format=None):
        reservations = get_all_reservations()
        return Response(reservations)

    def post(self, request, format=None):
        serializer = ReservaSerializer(data=request.data)
        if serializer.is_valid():
            reservation_data = create_reservation(serializer.validated_data)
            return Response(reservation_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReservaDetail(APIView):
    def get(self, request, reservation_id, format=None):
        reservation = get_reservation(reservation_id)
        if reservation:
            return Response(reservation)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, reservation_id, format=None):
        serializer = ReservaSerializer(data=request.data)
        if serializer.is_valid():
            reservation_data = update_reservation(reservation_id, serializer.validated_data)
            if reservation_data:
                return Response(reservation_data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, reservation_id, format=None):
        deleted = delete_reservation(reservation_id)
        if deleted:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)

class UsuarioList(APIView):
    def get(self, request, format=None):
        users = get_all_users()
        return Response(users)

    def post(self, request, format=None):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            user_data = create_user(serializer.validated_data)
            return Response(user_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsuarioDetail(APIView):
    def get(self, request, uid, format=None):
        user = get_user(uid)
        if user:
            return Response(user)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, uid, format=None):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            user_data = update_user(uid, serializer.validated_data)
            if user_data:
                return Response(user_data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, uid, format=None):
        deleted = delete_user(uid)
        if deleted:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)
   