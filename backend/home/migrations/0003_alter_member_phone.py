# Generated by Django 4.1.7 on 2023-04-16 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_alter_member_phone_alter_member_roll_number_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="member",
            name="phone",
            field=models.IntegerField(unique=True),
        ),
    ]
