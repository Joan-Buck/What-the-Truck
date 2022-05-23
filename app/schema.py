import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from .models import db, Truck as TruckModel

class Truck(SQLAlchemyObjectType):
    class Meta:
        model = TruckModel
        interfaces = (relay.Node, )

class Query(graphene.ObjectType):
    node = relay.Node.Field()
    all_trucks = SQLAlchemyConnectionField(Truck.connection)


schema = graphene.Schema(query=Query)
