data = read.table("hackatino_2017_bicicoruna.csv", sep=";", head=T)

#Hay que limpiar un usuario que tiene datos mal (user_id = 7123)
data = data[data$USUARIO!=7123,]
data$SEXO = droplevels(data$SEXO) #Limpieza de los niveles del factor 'sexo'

#Ajusta los tipos de dato del csv
data$FECHA_NACIMIENTO = as.factor(data$FECHA_NACIMIENTO)
data$USUARIO = as.factor(data$USUARIO)
data$INICIO_TRAYECTO = as.POSIXct(data$INICIO_TRAYECTO)
data$FIN_TRAYECTO = as.POSIXct(data$FIN_TRAYECTO)

#Calcula tiempos de trayecto (en horas)
data$TIEMPO_TRAYECTO = difftime(data$FIN_TRAYECTO, data$INICIO_TRAYECTO, units="secs")

#Agrupando total de tiempos de trayecto por día
data$anyo = as.factor(format(data$INICIO_TRAYECTO, "%y"))
data$mes = as.factor(format(data$INICIO_TRAYECTO, "%m"))
data$dia = as.factor(format(data$INICIO_TRAYECTO, "%d"))
data$hora = as.factor(format(data$INICIO_TRAYECTO, "%H"))
data$minuto= as.factor(format(data$INICIO_TRAYECTO, "%M"))
data$segundo = as.factor(format(data$INICIO_TRAYECTO, "%S"))

#Indices para coger una fila por día
indices = !duplicated(data[, c('anyo','mes','dia','SEXO')])
times = data[indices, c('INICIO_TRAYECTO')]

#Suma de tiempos por día
tiempo_trayecto_dia = aggregate(data$TIEMPO_TRAYECTO, list(data$anyo, data$mes, data$dia,data$SEXO), sum)
colnames(tiempo_trayecto_dia) = c("anyo", "mes", "dia", "SEXO", "tiempo")
ordenado = tiempo_trayecto_dia[with(tiempo_trayecto_dia, order(anyo, mes, dia,SEXO)), ]

tiempo_trayecto_dia = cbind(ordenado, times)
colnames(tiempo_trayecto_dia) = c("anyo", "mes", "dia", "sexo", "tiempo", "fecha")

tiempo_trayecto_dia$fecha = strftime(tiempo_trayecto_dia$fecha, "%d/%m/%y")

tiempo_trayecto_dia$anyo = NULL
tiempo_trayecto_dia$mes = NULL
tiempo_trayecto_dia$dia = NULL

write.table(tiempo_trayecto_dia, file="trayecto_dia.csv", row.names=F, sep=",")




