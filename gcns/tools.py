import numpy as np
import json

def utmConvert():
	# convert utm to cassini

	# utm coordinates
	A = np.array([
		[227357.7, -9856191.6, 1, 0],
		[9856191.6, 227357.7, 0, 1],
		[232925.1, -9856197, 1, 0],
		[9856197, 232925.1, 0, 1],
		[227363.2, -9850660.5, 1, 0],
		[9850660.5, 227363.2, 0, 1],
		[232930.5, -9850666.1, 1, 0],
		[9850666.1, 232930.5, 0, 1]
	])

	# cassini coordinates
	B = np.array([
		[-164589],
		[-472235.7],
		[-146333.3],
		[-472232.3],
		[-164585.4],
		[-490372.5],
		[-146330.2],
		[-490369]
	])

	# transpose A
	Atrans = A.transpose()

	# A by A trans

	C = Atrans.dot(A)

	D = np.linalg.inv(C)

	E = Atrans.dot(B)

	F = D.dot(E)


	print(A)
	print(B)
	print(Atrans)
	print(C)
	print(D)
	print(E)
	print(F)






utmConvert()