import re
import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from graphene_sqlalchemy.types import ORMField
from sqlalchemy import and_
from .models import db, Truck as TruckModel


class Truck(SQLAlchemyObjectType):
    database_id = ORMField(type=graphene.Int, model_attr="id")

    class Meta:
        model = TruckModel
        interfaces = (relay.Node, )


class Query(graphene.ObjectType):
    # node = relay.Node.Field()
    all_trucks = SQLAlchemyConnectionField(Truck.connection, sort=None)

    truck = graphene.Field(Truck, database_id=graphene.Int(required=True))
    # get trucks by owner
    owner_trucks = graphene.Field(Truck, owner_id=graphene.Int(required=True))

    def resolve_truck(self, info, database_id):
        return Truck.get_query(info).filter(TruckModel.id==database_id).first()

    def resolve_owner_trucks(self, info, owner_id):
        return Truck.get_query(info).filter(TruckModel.owner_id==owner_id).first()

schema = graphene.Schema(query=Query)
