---------------------------------------------
	CAMPOS
---------------------------------------------
/ -------------------------------------------------------------------------------------------------- /
	- Multiples Opciones Con Unica Respuesta => unique
		Titulo de la pregunta
		Pregunta
		Respuestas
			CORRECTA  :  =Nazaret#¡Correcto! ¡Eso es!
			INCORRECTA:  ~Jerusalén#Esta era una ciudad importante, pero no es la respuesta
		correcta.
		Retro-Alimentacion
	
		-------------------
		|  EJEMPLO        :
		-------------------
		::El pueblo de Jesús::Jesús era del pueblo de{
		 ~Jerusalén#Esta era una ciudad importante, pero no es la respuesta
		correcta.
		 ~Belén#Nació allí, pero no creció en ese pueblo.
		 ~Galilea#Sea más específico.
		 =Nazaret#¡Correcto! ¡Eso es!}.
		 

		 
/ -------------------------------------------------------------------------------------------------- /
	- Multiples Opciones Con Multiples Respuesta => multiple
		Titulo de la pregunta
		Pregunta
		Respuestas
			100%:  =Nazaret#¡Correcto! ¡Eso es!
			XX% :  ~%XX%Galilea#Sea más específico.
			00% :  ~Jerusalén#Esta era una ciudad importante, pero no es la respuesta
		correcta.
		Retro-Alimentacion
	
		-------------------
		|  EJEMPLO        :
		-------------------
		::El pueblo de Jesús::Jesús era del pueblo de{
		 ~Jerusalén#Esta era una ciudad importante, pero no es la respuesta
		correcta.
		 ~%25%Belén#Nació allí, pero no creció en ese pueblo.
		 ~%50%Galilea#Sea más específico.
		 =Nazaret#¡Correcto! ¡Eso es!}.
		 
/ -------------------------------------------------------------------------------------------------- /
	- Verdadero-Falso => boolean
		Titulo de la pregunta
		Pregunta
		Respuesta F=Falsa la afirmacion | T = Verdadera la afirmacion
		Retro-Alimentacion 1 | En caso de fallar la respuesta.
		Retro-Alimentacion 2 | En caso de ganar la respuesta.
	
		-------------------
		|  EJEMPLO        :
		-------------------		
		::Pregunta 1::as {F#ra1#ra2}
		
/ -------------------------------------------------------------------------------------------------- /
	- Emparejamiento => pairing
		Titulo de la pregunta
		Pregunta
		Respuestas
			=subpregunta -> subrespuesta
		
		-------------------
		|  EJEMPLO        :
		-------------------
		::Pregunta 1::Preguntas de emparejamiento. {
			 =subpregunta1 -> subrespuesta1
			 =subpregunta2 -> subrespuesta2
			 =subpregunta3 -> subrespuesta3
		}
/ -------------------------------------------------------------------------------------------------- /
BASE:
	<p><span style\="background-color: xxxxxxxxxx; color: white; padding-left: 8px; padding-right: 8px"><strong><b>XXXXXX</b></strong></span></p>
VERDE: -> Retro Correcta
	<p><span style\="background-color: green; color: white; padding-left: 8px; padding-right: 8px"><strong><b>Retroalimentación Correcta</b></strong></span></p>
ROJO: -> Retro Incorrecta
	<p><span style\="background-color: red; color: white; padding-left: 8px; padding-right: 8px"><strong><b>Retroalimentación Incorrecta</b></strong></span></p>

