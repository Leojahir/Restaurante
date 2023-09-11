# firebase_utils.py

from firebase_admin import firestore

db = firestore.client()

def get_doc(collection, doc_id):
    doc = db.collection(collection).document(doc_id).get()
    if doc.exists:
        data = doc.to_dict()
        data['id'] = doc.id  
        return data
    return None

def create_doc(collection, data):
    doc_ref = db.collection(collection).document()
    doc_ref.set(data)
    data['id'] = doc_ref.id 
    return data

def update_doc(collection, doc_id, data):
    doc_ref = db.collection(collection).document(doc_id)
    doc_ref.update(data)
    data['id'] = doc_ref.id  
    return data

def delete_doc(collection, doc_id):
    db.collection(collection).document(doc_id).delete()
    return True

def get_all_docs(collection):
    docs = db.collection(collection).stream()
    results = []
    for doc in docs:
        data = doc.to_dict()
        data['id'] = doc.id  
        results.append(data)
    return results


def get_all_tables():
    return get_all_docs('Mesas')

def get_table(table_id):
    return get_doc('Mesas', table_id)

def create_table(data):
    return create_doc('Mesas', data)

def update_table(table_id, data):
    return update_doc('Mesas', table_id, data)

def delete_table(table_id):
    return delete_doc('Mesas', table_id)

# Usuarios

def get_all_users():
    return get_all_docs('Usuarios')

def get_user(user_id):
    return get_doc('Usuarios', user_id)

def create_user(data):
    return create_doc('Usuarios', data)

def update_user(user_id, data):
    return update_doc('Usuarios', user_id, data)

def delete_user(user_id):
    return delete_doc('Usuarios', user_id)

# Reservas

def get_all_reservations():
    return get_all_docs('Reservas')

def get_reservation(reservation_id):
    return get_doc('Reservas', reservation_id)

def create_reservation(data):
    return create_doc('Reservas', data)

def update_reservation(reservation_id, data):
    return update_doc('Reservas', reservation_id, data)

def delete_reservation(reservation_id):
    return delete_doc('Reservas', reservation_id)

# Productos

def get_all_products():
    return get_all_docs('Productos')

def get_product(product_id):
    return get_doc('Productos', product_id)

def create_product(data):
    return create_doc('Productos', data)

def update_product(product_id, data):
    return update_doc('Productos', product_id, data)

def delete_product(product_id):
    return delete_doc('Productos', product_id)

# Pedidos

def get_all_orders():
    return get_all_docs('Pedidos')

def get_order(order_id):
    return get_doc('Pedidos', order_id)

def create_order(data):
    return create_doc('Pedidos', data)

def update_order(order_id, data):
    return update_doc('Pedidos', order_id, data)

def delete_order(order_id):
    return delete_doc('Pedidos', order_id)

