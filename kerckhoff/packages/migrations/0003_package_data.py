# Generated by Django 2.0.2 on 2018-04-18 22:24

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('packages', '0002_auto_20180304_0020'),
    ]

    operations = [
        migrations.AddField(
            model_name='package',
            name='data',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, default=dict, null=True),
        ),
    ]
